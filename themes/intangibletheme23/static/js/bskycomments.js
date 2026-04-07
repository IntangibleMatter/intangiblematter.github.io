// originally taken from https://ronaldsvilcins.com/2025/01/12/how-to-add-bluesky-comments-to-your-hugo-website/

function unorphanize(element, count = 1) {
	// Get HTML content
	let html = element.innerHTML;

	// Store HTML tags
	const tags = html.match(/<([A-Z][A-Z0-9]*)\b[^>]*>/gi) || [];
	const placeholders = tags.map((_, i) => `__${i}__`);

	// Replace tags with placeholders
	tags.forEach((tag, i) => {
		html = html.replace(tag, placeholders[i]);
	});

	// Add non-breaking spaces
	for (let i = 0; i < count; i++) {
		const lastSpaceIndex = html.lastIndexOf(" ");
		if (lastSpaceIndex > 0) {
			html =
				html.substring(0, lastSpaceIndex) +
				"&nbsp;" +
				html.substring(lastSpaceIndex + 1);
		}
	}

	// Restore tags
	tags.forEach((tag, i) => {
		html = html.replace(placeholders[i], tag);
	});

	element.innerHTML = html;
}

// First, add a script variable to store the original post URL
let blueskyPostUrl = "";

async function loadBlueskyComments() {
	const currentUrl = window.location.href;
	const formattedUrl = currentUrl.replace("https://", "").split("?")[0];
	const commentsDiv = document.getElementById("bluesky-comments");
	// Clear existing content
	commentsDiv.innerHTML = "";
	const commentsList = document.createElement("ul");
	commentsDiv.appendChild(commentsList);

	try {
		/*const searchParams = new URLSearchParams({
			q: currentUrl,
			author: "blog.intangiblematter.net",
		});
		const searchResponse = await fetch(
			`https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?${searchParams}`,
			{
				headers: {
					Accept: "application/json",
					origin: "https://intangiblematter.github.io",
					Referer: "https://intangiblematter.github.io",
				},
			},
		);*/
		const searchParams = new URLSearchParams({
			actor: "blog.intangiblematter.net",
			limit: 100,
		});
		const searchResponse = await fetch(
			`https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?${searchParams}`,
		);

		if (!searchResponse.ok) throw new Error("Failed to search posts");
		const searchData = await searchResponse.json();

		let currPost = {};

		// find the post with the current page link
		if (searchData.feed) {
			for (const feedItem of searchData.feed) {
				if (feedItem.post.embed) {
					//const postText = feedItem.post.record.text;
					if (feedItem.post.embed.external) {
						if (
							feedItem.post.embed.external.uri
								.toLowerCase()
								.includes(formattedUrl.toLowerCase())
						) {
							currPost = feedItem.post;
							blueskyPostUrl = `https://bsky.app/profile/${currPost.author.did}/post/${currPost.uri.split("/").pop()}`;
							const commentPromptLink =
								document.querySelector(".comment-prompt a");
							if (commentPromptLink) {
								commentPromptLink.href = blueskyPostUrl;
							}
							break;
						}
					}
				}
			}
		}

		// Update stats and post URL for the first matching post
		/*if (searchData.posts && searchData.posts[0]) {
			const post = searchData.posts[0];
			// Update stats
			document.getElementById("reply-count").textContent =
				post.replyCount || 0;
			document.getElementById("repost-count").textContent =
				post.repostCount || 0;
			document.getElementById("like-count").textContent =
				post.likeCount || 0;
			// Update comment link
			blueskyPostUrl = `https://bsky.app/profile/${post.author.did}/post/${post.uri.split("/").pop()}`;
			const commentPromptLink =
				document.querySelector(".comment-prompt a");
			if (commentPromptLink) {
				commentPromptLink.href = blueskyPostUrl;
			}
		}*/

		// For each post found, fetch its thread
		const allComments = [];
		//		for (const post of searchData.posts) {
		const threadParams = new URLSearchParams({ uri: currPost.uri });
		const threadResponse = await fetch(
			`https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?${threadParams}`,
			{ headers: { Accept: "application/json" } },
		);

		if (threadResponse.ok) {
			const threadData = await threadResponse.json();
			if (threadData.thread?.replies) {
				allComments.push(...threadData.thread.replies);
			}
		}
		//		}

		// Sort all comments by time
		const sortedComments = allComments.sort(
			(a, b) => new Date(a.post.indexedAt) - new Date(b.post.indexedAt),
		);

		sortedComments.forEach((reply) => {
			if (!reply?.post?.record?.text) return;
			const author = reply.post.author;

			const li = document.createElement("li");
			li.innerHTML = `
        <small>
          <a href="https://bsky.app/profile/${author.did}" target="_blank">
            ${author.displayName || author.handle}
          </a>
          <span class="author-handle">@${author.handle}</span>
        </small>
        <p>${reply.post.record.text}</p>
        <small>
          💬 ${reply.post.replyCount || 0}&nbsp;
          🔄 ${reply.post.repostCount || 0}&nbsp;
          ♥️ ${reply.post.likeCount || 0}&nbsp;
          <a href="https://bsky.app/profile/${reply.post.author.did}/post/${reply.post.uri.split("/").pop()}" target="_blank">
            Link
          </a>
        </small>
      `;
			// Apply unorphanize to the list item
			unorphanize(li);
			commentsList.appendChild(li);
		});
	} catch (error) {
		commentsDiv.innerHTML = `<p>Error loading comments: ${error.message}</p>`;
	}
}

document.addEventListener("DOMContentLoaded", loadBlueskyComments);

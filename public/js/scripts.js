// Sample code to load Twitter feed
document.addEventListener('DOMContentLoaded', function() {
    fetchTwitterFeed();
});

function fetchTwitterFeed() {
    // Simulate fetching Twitter feed
    const twitterDiv = document.getElementById('twitterFeed');
    twitterDiv.innerHTML = "<p>Latest tweet: 'Exciting times at Grimware! #fashion #tech'</p>";
}
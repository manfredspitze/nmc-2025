fetch('data.xml')
  .then(response => response.text())
  .then(xml => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');

    // Get all the friends
    const friends = doc.getElementsByTagName('friend');
    const friendsList = document.getElementById('friends-list');

    for (let i = 0; i < friends.length; i++) {
      const firstName = friends[i].getElementsByTagName('firstName')[0].textContent;
      const li = document.createElement('li');
      li.textContent = firstName;
      friendsList.appendChild(li);
    }

    // Get the best friend
    const bestFriend = doc.getElementsByTagName('bestFriend')[0];
    const bestFriendName = bestFriend.getElementsByTagName('firstName')[0].textContent;
    const bestFriendElement = document.getElementById('best-friend');
    bestFriendElement.textContent = bestFriendName;
  })
  .catch(error => console.error(error));

function incrementCounter(userId) {
  // Incorrect: Directly incrementing without transaction
  db.ref('users/' + userId + '/counter').once('value', function(snapshot) {
    const currentValue = snapshot.val() || 0;
    db.ref('users/' + userId + '/counter').set(currentValue + 1);
  });
}
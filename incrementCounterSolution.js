function incrementCounter(userId) {
  const counterRef = db.ref('users/' + userId + '/counter');
  counterRef.transaction(function(currentCount) {
    return (currentCount || 0) + 1;
  });
}

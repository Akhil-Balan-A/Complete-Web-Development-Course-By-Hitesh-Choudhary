const subscribeButton = document.getElementById('subscribe-button');
  let isSubscribed = false; 
  subscribeButton.addEventListener('click', () => {
    isSubscribed = !isSubscribed;
  
    subscribeButton.textContent = isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE';
    subscribeButton.classList.toggle('YT-subscribe-button', !isSubscribed);
    subscribeButton.classList.toggle('YT-subscribed-button', isSubscribed);
  });
  
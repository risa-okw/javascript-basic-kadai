const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let text = document.getElementById('text').textContent;
  document.getElementById('text').textContent = 'ボタンをクリックしました';  
});

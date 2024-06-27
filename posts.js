const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const requestUrl = `${baseUrl}?userId=${userId}`;



        async function getUserID() {
            let userId = urlParams.get('userId');
        
            if (!userId) {
                userId = await prompt('Lütfen 1 ile 10 arasında bir sayı giriniz.:');
        
                if (userId === null || isNaN(userId) || userId < 1 || userId > 10) {
                    alert('Kullanıcı bulunamadı. Lütfen 1 ile 10 arasında bir sayı giriniz.:');
                    throw new Error('Kıullanuıcı Bulunamadı');
                }
            }
        
            return userId;
        }
        
        getUserID().then(userId => {
            
            const requestUrl = `${baseUrl}?userId=${userId}`;
        
            
            fetch(requestUrl)
                .then(response => response.json())
                .then(posts => {
                    const postListContainer = document.getElementById('post-list');
        
                    posts.forEach(post => {
                        const card = document.createElement('div');
                        card.classList.add('card');
        
                        const cardContent = `
                            <h2>${post.title}</h2>
                            <p>${post.body}</p>
                        `;
        
                        card.innerHTML = cardContent;
                        postListContainer.appendChild(card);
                    });
                })
                .catch(error => console.error('Error fetching posts:', error));
        });
        
        const backUsers = document.getElementById('backUsers')
        backUsers.addEventListener('click', () => {
            window.location.href = 'index.html'
        });
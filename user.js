async function users() {
    try {
        const usersInformation = await fetch ("https://jsonplaceholder.typicode.com/users")
    
    const data = await usersInformation.json();
    
    const userContList = document.getElementById("userContList")
    data.forEach(user => {
        const card = document.createElement('div')
        card.classList.add('col')

        card.innerHTML= `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.id} <br> Adı: ${user.name} <br> Kullanıcı Adı:${user.username}</h5>
                        <p class="card-text">Adres: <br> Sokak: ${user.address.street}, Daire:${user.address.suite}, Şehir:${user.address.city}, Posta Kodu:${user.address.zipcode},${user.address.geo.lat},Evinin Konumu: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                        <p class="card-text">Şirket Bilgileri: ${user.company.name},Şirket Sloganı: ${user.company.catchPhrase}, Şirket Çalışma Alanı:${user.company.bs}</p>
                        <p class="card-text">İletişim Bilgileri: Telefon Numarası:${user.phone} Mail Adresi:${user.email} Websitesi:${user.website}</p>
                        <a href="posts.html?userId=${user.id}">Gönderileri Görüntüle</a>
                    </div>
                </div>
            `;
            
            userContList.appendChild(card);
        
    });
    } catch (err) {
        console.error('Kullanıcıya Erişilemedi:', err);
    }
    
    
}
users()

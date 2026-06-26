// Musical World Static Database & State Management

// Mock Static Songs Database Seed
const DEFAULT_SONGS_DATABASE = {
    // 1: Kannada albums
    '1': [
        {
            song_id: 'k1',
            song_name: 'Kanasalu',
            singer_name: 'Vijay Prakash',
            movie_name: 'Kanasalu',
            song_image: 'kanasalu.jpg',
            audio_file: 'Kanasalu [KannadaMasti.Net].mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k2',
            song_name: 'Last Benchu Party',
            singer_name: 'Chandan Shetty',
            movie_name: 'Kirik Party',
            song_image: 'lastbench.jpg',
            audio_file: 'Last_Benchu_Party.mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k3',
            song_name: 'Mussanje Veleli',
            singer_name: 'Sonu Nigam',
            movie_name: 'Mussanje Maatu',
            song_image: 'mussanje.jpg',
            audio_file: 'Mussanje Veleli - Copy.mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k4',
            song_name: 'Saaluthillave',
            singer_name: 'Vijay Prakash',
            movie_name: 'Kotigobba 2',
            song_image: 'saluthillave.jpg',
            audio_file: 'Saaluthillave [Starmusiq.xyz].mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k5',
            song_name: 'Sariyaagi Nenapu',
            singer_name: 'Armaan Malik',
            movie_name: 'Mungaru Male 2',
            song_image: 'sariyagi.jpg',
            audio_file: 'Sariyaagi [KannadaMasti.Net].mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k6',
            song_name: 'Sadha Ninna Kannali',
            singer_name: 'Vijay Prakash',
            movie_name: 'Sadha',
            song_image: 'rangitharanga.jpg',
            audio_file: '03.Sadha Ninna Kannali - Copy.mp3',
            category_dir: 'kannada_songs'
        },
        {
            song_id: 'k7',
            song_name: 'Kareyole',
            singer_name: 'Karthik',
            movie_name: 'Rangitaranga',
            song_image: 'rangitharanga.jpg',
            audio_file: 'Kareyole.mp3',
            category_dir: 'kannada_songs'
        }
    ],
    // 2: Hindi albums
    '2': [
        {
            song_id: 'h1',
            song_name: 'Chahun Main Ya Naa',
            singer_name: 'Arijit Singh, Palak Muchhal',
            movie_name: 'Aashiqui 2',
            song_image: 'chahun_mai_aana.jpg',
            audio_file: 'Chahun_Main_Ya_Naa(MyMp3Song).mp3',
            category_dir: 'hindi_songs'
        },
        {
            song_id: 'h2',
            song_name: 'Galliyan',
            singer_name: 'Ankit Tiwari',
            movie_name: 'Ek Villain',
            song_image: 'ek_villian.jpg',
            audio_file: 'Galliyan_-_Ek_Villain_(Ankit_Tiwari)(MyMp3Song.Com).mp3',
            category_dir: 'hindi_songs'
        },
        {
            song_id: 'h3',
            song_name: 'Kaun Tujhe',
            singer_name: 'Palak Muchhal',
            movie_name: 'M.S. Dhoni',
            song_image: 'kaun-tujhe-ms-dhoni-sushant-singh-400x212.jpg',
            audio_file: 'Kaun Tujhe-(Mr-Jatt.com).mp3',
            category_dir: 'hindi_songs'
        },
        {
            song_id: 'h4',
            song_name: 'Sanam Re',
            singer_name: 'Arijit Singh',
            movie_name: 'Sanam Re',
            song_image: 'sanam_re.jpg',
            audio_file: 'Sanam Re (Title Song) - Arijit Singh [Full Song].mp3',
            category_dir: 'hindi_songs'
        },
        {
            song_id: 'h5',
            song_name: 'Sooraj Dooba Hain',
            singer_name: 'Arijit Singh, Aditi Singh Sharma',
            movie_name: 'Roy',
            song_image: 'Sooraj_Dooba_Hain.jpg',
            audio_file: 'Sooraj Dooba Hain Yaaron .mp3',
            category_dir: 'hindi_songs'
        }
    ],
    // 3: English albums
    '3': [
        {
            song_id: 'e1',
            song_name: 'Baarish',
            singer_name: 'Ash King',
            movie_name: 'Half Girlfriend',
            song_image: 'download.jpg',
            audio_file: '01 Baarish.mp3',
            category_dir: 'english_songs'
        },
        {
            song_id: 'e2',
            song_name: 'Hum Mar Jayenge',
            singer_name: 'Arijit Singh, Tulsi Kumar',
            movie_name: 'Aashiqui 2',
            song_image: 'download (2).jpg',
            audio_file: '04 - Hum Mar Jayenge - DownloadMing.SE.mp3',
            category_dir: 'english_songs'
        },
        {
            song_id: 'e3',
            song_name: 'Banjaara',
            singer_name: 'Mohammad Irfan',
            movie_name: 'Ek Villain',
            song_image: 'download (3).jpg',
            audio_file: '2. Banjaara - Mohammad Irfan.mp3',
            category_dir: 'english_songs'
        },
        {
            song_id: 'e4',
            song_name: 'Lean On Mashup',
            singer_name: 'Major Lazer ft. Vidya Vox',
            movie_name: 'Mashup',
            song_image: 'download (4).jpg',
            audio_file: 'Major Lazer - Lean OnJind Mahi (Vidya Mashup Cover ft Ricky Jatt  Raashi Ku - Copy.mp3',
            category_dir: 'english_songs'
        }
    ]
};

// Initialize localStorage models if they don't exist
if (!localStorage.getItem('users')) {
    // Seed with default admin user
    const defaultUsers = [
        {
            username: 'Vijay',
            mobile_number: '9876543210',
            email_address: 'vijaymahes9080@gmail.com',
            password: 'vijay123', // plain text for simple client-side check
            contributions: 0
        }
    ];
    localStorage.setItem('users', JSON.stringify(defaultUsers));
}

if (!localStorage.getItem('uploadedSongs')) {
    localStorage.setItem('uploadedSongs', JSON.stringify([]));
}

if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
}

if (!localStorage.getItem('songsDatabase')) {
    localStorage.setItem('songsDatabase', JSON.stringify(DEFAULT_SONGS_DATABASE));
}

function getSongsDatabase() {
    return JSON.parse(localStorage.getItem('songsDatabase') || JSON.stringify(DEFAULT_SONGS_DATABASE));
}

function saveSongsDatabase(db) {
    localStorage.setItem('songsDatabase', JSON.stringify(db));
}

// Authentication & Session helpers
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function checkSession() {
    const user = getCurrentUser();
    if (!user && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }
    return user;
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email_address === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return { success: true, user };
    }
    return { success: false, message: 'Wrong username or Password!' };
}

function registerUser(username, mobile, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email_address === email)) {
        return { success: false, message: 'Email address already registered!' };
    }
    const newUser = { username, mobile_number: mobile, email_address: email, password, contributions: 0 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true, user: newUser };
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function resetPasswordSimulate(email) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email_address === email);
    if (user) {
        return { success: true, username: user.username };
    }
    return { success: false, message: 'Email not found.' };
}

// Contributions and Uploads helpers
function getUploadedSongs() {
    return JSON.parse(localStorage.getItem('uploadedSongs') || '[]');
}

function uploadSongSimulate(songName, songFormat, singerName, songImage, audioFile) {
    const currentUser = getCurrentUser();
    if (!currentUser) return { success: false, message: 'Not logged in.' };

    const uploaded = getUploadedSongs();
    const newSong = {
        song_id: 'u_' + Date.now(),
        singer_id: currentUser.email_address,
        song_name: songName,
        song_format: songFormat,
        singer_name: singerName,
        song_image: songImage || 'musical-world.jpg',
        audio_file: audioFile || 'AUD-20170703-WA0033.mp3',
        category_dir: 'uploaded_songs'
    };
    uploaded.push(newSong);
    localStorage.setItem('uploadedSongs', JSON.stringify(uploaded));

    // Update contributions for user
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIdx = users.findIndex(u => u.email_address === currentUser.email_address);
    if (userIdx !== -1) {
        users[userIdx].contributions = (users[userIdx].contributions || 0) + 1;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(users[userIdx]));
    }
    return { success: true, song: newSong };
}

// Favorites helpers
function getFavorites() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return allFavorites.filter(f => f.user_email === currentUser.email_address);
}

function addFavorite(songId, catId, songName, singerName, songImage, audioFile, categoryDir) {
    const currentUser = getCurrentUser();
    if (!currentUser) return { success: false, message: 'Not logged in' };

    const allFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const alreadyFavorited = allFavorites.some(f => 
        f.user_email === currentUser.email_address && f.song_id === songId && f.cat_id === catId
    );

    if (alreadyFavorited) {
        return { success: false, message: 'You have already added this song to your favorite list!' };
    }

    const newFav = {
        id: 'f_' + Date.now(),
        user_email: currentUser.email_address,
        song_id: songId,
        cat_id: catId,
        song_name: songName,
        singer_name: singerName,
        song_image: songImage,
        audio_file: audioFile,
        category_dir: categoryDir
    };

    allFavorites.push(newFav);
    localStorage.setItem('favorites', JSON.stringify(allFavorites));
    return { success: true, favorite: newFav };
}

function removeFavorite(songId, catId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return { success: false };

    let allFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    allFavorites = allFavorites.filter(f => 
        !(f.user_email === currentUser.email_address && f.song_id === songId && f.cat_id === catId)
    );
    localStorage.setItem('favorites', JSON.stringify(allFavorites));
    return { success: true };
}

// Dynamic header insertion for UI consistency
function renderNavbar(activePageTitle) {
    const user = getCurrentUser();
    const usernameDisplay = user ? `Logged in as ${user.username}` : '';
    const isAdmin = user && user.email_address === 'vijaymahes9080@gmail.com';
    const profileLink = isAdmin ? 'admin_page.html' : 'profile.html';
    
    const navHTML = `
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="${user ? profileLink : 'index.html'}">
                    Musical World
                </a>
                <pre>                 </pre>
                ${user ? `
                <li class="nav-item">
                    <b style="font-size:20px;"><p style="color:blue;">${usernameDisplay}</p></b>
                    <p style="color:blue;">| ${activePageTitle} |</p>
                </li>
                ` : ''}
                <button class="navbar-toggler ml-lg-auto ml-sm-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav text-center ml-auto">
                        ${user ? `
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Track</button>
                            <div class="dropdown-menu dropdown-primary">
                                <a class="dropdown-item" href="kannada_songs.html"><b>Kannada Songs</b></a>
                                <a class="dropdown-item" href="hindi_songs.html"><b>Hindi Songs</b></a>
                                <a class="dropdown-item" href="english_songs.html"><b>English Songs</b></a>
                                <a class="dropdown-item" href="uploaded_songs.html"><b>Uploaded Songs</b></a>
                            </div>	
                        </div>
                        <li class="nav-item">
                            <a class="nav-link scroll" href="favorite_list.html"><i class='fa fa-heart' style='font-size:40px;color:red'></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll" href="#contact">contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll" href="#" onclick="logoutUser(); return false;">logout</a>
                        </li>
                        ` : `
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll" href="#contact">Contact</a>
                        </li>
                        `}
                    </ul>
                </div>
            </nav>
        </div>
    `;
    
    const headerEl = document.querySelector('header');
    if (headerEl) {
        headerEl.innerHTML = navHTML;
    }
}

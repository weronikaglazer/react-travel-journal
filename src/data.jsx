const data = [
    {
        id: 1,
        title: 'Porto',
        country: '🇵🇹 PORTUGAL',
        img: 'porto.jpg',
        date: '11/2024',
        description: 'Porto, the vibrant heart of northern Portugal, enchants with its cobbled streets, historic Ribeira district, and renowned port wine cellars. Overlooking the Douro River, the city combines a rich architectural legacy with a warm and inviting atmosphere, perfect for exploration. Its dynamic cultural scene and stunning riverfront vistas make it a destination like no other.',
        map: 'https://www.google.com/maps/place/Porto,+Portugalia/@41.1621822,-8.663239,13z/data=!3m1!4b1!4m6!3m5!1s0xd2465abc4e153c1:0xa648d95640b114bc!8m2!3d41.1579438!4d-8.6291053!16zL20vMHBtbjc?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 2,
        title: 'Copenhagen',
        country: '🇩🇰 DENMARK',
        img: 'copenhagen.jpg',
        date: '09/2024',
        description: 'Copenhagen, the epitome of Scandinavian cool, charms with its colorful Nyhavn harbor, innovative cuisine, and cycling-friendly streets. Home to iconic landmarks like the Little Mermaid statue and Tivoli Gardens, it\’s a city where sustainability meets rich cultural heritage. Its hygge-filled cafes and design-forward boutiques further enhance its welcoming atmosphere.',
        map: 'https://www.google.com/maps/place/Kopenhaga,+Dania/@55.6712396,12.5112525,12z/data=!3m1!4b1!4m6!3m5!1s0x4652533c5c803d23:0x4dd7edde69467b8!8m2!3d55.6760968!4d12.5683372!16zL20vMDFsZnk?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 3,
        title: 'Paris',
        country: '🇫🇷 FRANCE',
        img: 'paris2024.JPG',
        date: '08/2024',
        description: 'Known for its artistic flair and historic charm, Paris seamlessly blends modern sophistication with old-world elegance. From the grandeur of the Champs-Élysées to the bohemian spirit of Montmartre, every corner of the city tells a story of beauty, inspiration, and joie de vivre. Whether by day or night, its illuminated streets exude an unforgettable magic.',
        map: 'https://www.google.com/maps/place/Pary%C5%BC,+Francja/@48.8588254,2.2644632,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 4,
        title: 'Frankfurt',
        country: '🇩🇪 GERMANY',
        img: 'frankfurt.jpg',
        date: '06/2024',
        description: 'Frankfurt, Germany\’s financial hub, dazzles with its striking skyline and historic charm. The city offers a unique juxtaposition of modern skyscrapers and medieval landmarks, like the Römer and St. Bartholomew\’s Cathedral, all set against the scenic backdrop of the Main River. Its cosmopolitan vibe and diverse culinary scene make it a hub of global appeal.',
        map: 'https://www.google.com/maps/place/Frankfurt+nad+Menem,+Niemcy/@50.1210949,8.471415,11z/data=!3m1!4b1!4m6!3m5!1s0x47bd096f477096c5:0x422435029b0c600!8m2!3d50.1109221!4d8.6821267!16zL20vMDJ6MGo?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 5,
        title: 'Malaga',
        country: '🇪🇸 SPAIN',
        img: 'malaga.jpg',
        date: '02/2024',
        description: 'Malaga, a sun-drenched city on Spain\’s Costa del Sol, offers a perfect blend of history and modernity. From the ancient Moorish Alcazaba to the vibrant streets adorned with contemporary art, it invites visitors to savor its rich heritage, Mediterranean cuisine, and lively beach culture. With its buzzing markets and warm hospitality, it leaves a lasting impression.',
        map: 'https://www.google.com/maps/place/Malaga,+Prowincja+Malaga,+Hiszpania/@36.7181206,-4.6049862,12z/data=!3m1!4b1!4m6!3m5!1s0xd7259c44fdb212d:0x6025dc92c9ca32cf!8m2!3d36.7178196!4d-4.425557!16s%2Fg%2F11b7c714d1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 6,
        title: 'Paris',
        country: '🇫🇷 FRANCE',
        img: 'paris2023.jpg',
        date: '07/2023',
        description: 'Paris, the City of Light, captivates visitors with its iconic landmarks, such as the Eiffel Tower and the Notre Dame Cathedral. Strolling along the Seine, exploring world-class museums like the Louvre, and savoring exquisite pastries in cozy cafes create an experience of timeless romance and cultural indulgence. Its vibrant fashion scene and lively street culture add to its enduring allure.',
        map: 'https://www.google.com/maps/place/Pary%C5%BC,+Francja/@48.8588254,2.2644632,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 7,
        title: 'Sopot',
        country: '🇵🇱 POLAND',
        img: 'sopot.jpg',
        date: '05/2023',
        description: 'Sopot, a gem on the Baltic coast, is renowned for its sandy beaches, vibrant nightlife, and Europe\’s longest wooden pier. This charming resort town offers a mix of relaxing spa treatments and lively cultural events, making it a perfect destination for rejuvenation and entertainment. Its elegant seaside villas and bustling cafes further enhance its unique character.',
        map: 'https://www.google.com/maps/place/Sopot/@54.4430355,18.519227,13z/data=!3m1!4b1!4m6!3m5!1s0x46fd0a914c1c265f:0xf7d319336f7a95fa!8m2!3d54.441581!4d18.5600956!16zL20vMDEzeHho?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 8,
        title: 'Göteborg',
        country: '🇸🇪 SWEDEN',
        img: 'goteborg.jpg',
        date: '02/2023',
        description: 'Located on the west coast of Sweden, Gothenburg is a charming city filled with picturesque canals and green parks. It is a hub for maritime activities, with a rich history in shipbuilding and fishing. The city is also known for its delicious seafood, vibrant music scene, and annual cultural events such as the Gothenburg Film Festival and the Gothia Cup, the world\'s largest youth football tournament.',
        map: 'https://www.google.pl/maps/place/Goteborg,+Szwecja/@57.7009921,11.8938365,10z/data=!3m1!4b1!4m6!3m5!1s0x464f8e67966c073f:0x4019078290e7c40!8m2!3d57.70887!4d11.97456!16zL20vMDM0M18'
    },
    {
        id: 9,
        title: 'Stockholm',
        country: '🇸🇪 SWEDEN',
        img: 'stockholm.jpg',
        date: '05/2022',
        description: 'Spread across 14 islands, Stockholm is the capital of Sweden and a cosmopolitan city that offers a mix of modern and traditional experiences. It is famous for its well-preserved historic buildings, including the Royal Palace and the Vasa Museum, which houses a 17th-century warship. Stockholm is also known for its thriving arts and culture scene, innovative design, and world-class cuisine.',
        map: 'https://www.google.pl/maps/place/Sztokholm,+Szwecja/@59.3260668,17.8419707,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM'
    },
    {
        id: 10,
        title: 'London',
        country: '🇬🇧 UNITED KINGDOM',
        img: 'london.png',
        date: '01/2020',
        description: 'As the capital of England, London is a global center for finance, culture, and tourism. It is a diverse and multicultural city, home to numerous iconic landmarks such as Buckingham Palace, the Tower of London, and the London Eye. With a thriving arts scene, excellent museums, and world-renowned theaters, London offers something for everyone. The city is also a foodie\'s paradise, with a huge variety of international cuisine available at every turn.',
        map: 'https://www.google.pl/maps/place/Londyn,+Wielka+Brytania/@51.528308,-0.3817796,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw'
    },
    {
        id: 11,
        title: 'Lisbon',
        country: '🇵🇹 PORTUGAL',
        img: 'lisbon.png',
        date: '02/2019',
        description: 'The capital of Portugal, Lisbon is a vibrant and colorful city that offers a mix of historic and modern attractions. The city is famous for its charming narrow streets, colorful tiled buildings, and stunning views of the Tagus River. Visitors can explore the historic neighborhoods of Alfama and Bairro Alto, try delicious Portuguese cuisine, or take a day trip to nearby beaches or the charming town of Sintra.',
        map: 'https://www.google.pl/maps/place/Lizbona,+Portugalia/@38.7435388,-9.3037327,12z/data=!3m1!4b1!4m6!3m5!1s0xd19331a61e4f33b:0x400ebbde49036d0!8m2!3d38.7222524!4d-9.1393366!16zL20vMDRsbGI'
    },
    {
        id: 12,
        title: 'Rome',
        country: '🇮🇹 ITALY',
        img: 'rome.png',
        date: '08/2017',
        description: 'Known as the "Eternal City," Rome is the capital of Italy and home to countless historical landmarks. From the iconic Colosseum and the ancient Roman Forum to the stunning Vatican City and the Trevi Fountain, Rome is a city steeped in history and culture. It is also known for its delicious cuisine, fashion, and bustling piazzas where locals and tourists alike gather to enjoy the city\'s vibrant atmosphere.',
        map: 'https://www.google.pl/maps/place/Rzym,+W%C5%82ochy/@41.8504438,11.9544638,9z/data=!3m1!4b1!4m6!3m5!1s0x13258a111bd74ac3:0x3094f9ab2388100!8m2!3d41.9027008!4d12.4962352!16s%2Fm%2F012m5qrv'
    }
]

export default data
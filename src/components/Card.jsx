export default function Card() {
    const response = {
        page: 1,
        results: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 4,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 5,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                image: "https://picsum.photos/500",
            },
        ],
    };

    const resp = Array.from(response.results);
    return (
        <div className="relative xl:mt-[400px] lg:mt-[600px] md:mt-[600px] sm:mt-[1000px]">
            <ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 md:gap-10 sm:gap-y-20 scale-50 items-center justify-center">
                {resp.map((resp) => 
                    (
                        <li className=" bg-[#14152f] rounded-2xl p-5">
                            <img src={resp.image} className="scale-[0.8] mx-auto"/>
                            <span>
                                <div className="font-bold underline">
                                    {resp.title}
                                </div>
                                <div className="mt-2">
                                    {resp.body}
                                </div>
                            </span>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default function NavigationBar() {
    const arr = [11,1,1,1,1,1,1,1,1,1,1,1,1];

    return (
        <ul className="shrink-0 p-2 border-r border-gray-line">
            <h1 className="font-semibold">Longvi Resaurant</h1>
            {arr?.map((tab, tabIndex) => {
                return (
                    <li
                        key={tabIndex}
                        className="mt-1 px-5 py-1 rounded-sm border
                            cursor-pointer duration-200 transition
                        "
                        onClick={() => {}}
                    >
                        Mục {tabIndex + 1}
                    </li>
                )
            })}
        </ul>
    );
};
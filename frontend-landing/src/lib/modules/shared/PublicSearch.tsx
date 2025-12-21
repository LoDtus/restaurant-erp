import { useEffect, useState } from "react";

export default function PublicSearch() {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        console.log(keyword);
    }, [keyword]);

    return (
        <input
            type="text"
            placeholder="Tìm kiếm"
            className="px-3 py-1 rounded-sm"
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
};
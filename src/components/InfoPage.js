import { useEffect, useState } from "react";

export function InfoPage() {
    let [data, setData] = useState(0);
    useEffect(() => {
        async function getInfoData() {
            let infoData = await fetch("http://localhost:8000/info");
            const parsedData = await infoData.json();
            setData(parsedData);
        }
        getInfoData();

    }, [])
    return (
        <div className="cve-item">
            <h3>
                Application name
            </h3>
            <p>
                {data.application}
            </p>
            <h3>
                Author is
            </h3>
            <p>
                {data.author}
            </p>
            <h3>
                A little description
            </h3>
            <p>
                {data.description}
            </p>
        </div>
    )
}
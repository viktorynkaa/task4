import { useEffect, useState } from "react";

export function KnownCVEPage() {
    let [data, setData] = useState([]);
    useEffect(() => {
        async function getKnownCVE() {
            let knownCVE = await fetch("http://localhost:8000/get/known");
            const parsedKnownCVE = await knownCVE.json();

            setData(parsedKnownCVE);
        }
        getKnownCVE();

    }, [])
    return (
        <div>
            <h1>Known CVE</h1>
            {data.map((item, index) => (
                <div key={index} className="cve-item">
                    <h2>{item.cveID}</h2>
                    <p><strong>Vendor/Project:</strong> {item.vendorProject}</p>
                    <p><strong>Product:</strong> {item.product}</p>
                    <p><strong>Vulnerability Name:</strong> {item.vulnerabilityName}</p>
                    <p><strong>Description:</strong> {item.shortDescription}</p>
                    <p><strong>Required Action:</strong> {item.requiredAction}</p>
                    <p><strong>Due Date:</strong> {item.dueDate}</p>
                    <p><strong>Known Ransomware Campaign Use:</strong> {item.knownRansomwareCampaignUse}</p>
                    <p>
                        <strong>Notes:</strong>{" "}
                        {item.notes.split("; ").map((note, i) => (
                            <a href={note} target="_blank" rel="noopener noreferrer" key={i}>
                                {`Link ${i + 1}`}
                            </a>
                        )).reduce((prev, curr) => [prev, " | ", curr])}
                    </p>
                    <p><strong>CWEs:</strong> {item.cwes.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}
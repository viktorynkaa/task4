import { useEffect, useState } from "react";

export function CVETwentyDaysPage() {
    let [data, setData] = useState([]);
    useEffect(() => {
        async function getCVETwentyDaysPageData() {
            let CVETwentyDaysPageData = await fetch("http://localhost:8000/get/all");
            const parsedCVETwentyDaysPageData = await CVETwentyDaysPageData.json();
            setData(parsedCVETwentyDaysPageData);
        }
        getCVETwentyDaysPageData();

    }, [])
    return (
        <div>
            <h1>CVE Details for 20 days</h1>
            {data.map((item, index) => (
                <div key={index} className="cve-item">
                    <h2>{item.cveID}</h2>
                    <p><strong>Vendor/Project:</strong> {item.vendorProject}</p>
                    <p><strong>Product:</strong> {item.product}</p>
                    <p><strong>Vulnerability Name:</strong> {item.vulnerabilityName}</p>
                    <p><strong>Date Added:</strong> {item.dateAdded}</p>
                    <p><strong>Description:</strong> {item.shortDescription}</p>
                    <p><strong>Required Action:</strong> {item.requiredAction}</p>
                    <p><strong>Due Date:</strong> {item.dueDate}</p>
                    <p><strong>Known Ransomware Campaign Use:</strong> {item.knownRansomwareCampaignUse}</p>
                    <p>
                        <strong>Notes:</strong>{" "}
                        <a href={item.notes.split(" ; ")[0]} target="_blank" rel="noopener noreferrer">
                            Link 1
                        </a>{" "}
                        |{" "}
                        <a href={item.notes.split(" ; ")[1]} target="_blank" rel="noopener noreferrer">
                            Link 2
                        </a>
                    </p>
                    <p><strong>CWEs:</strong> {item.cwes.join(", ")}</p>
                </div>
            ))}
        </div>
    )
}
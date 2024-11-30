import { useState } from "react";

async function getCVEByKeyword(query) {
    let CVEByKeyword = await fetch(`http://localhost:8000/get?query=${query}`);
    const parsedCVEByKeyword = await CVEByKeyword.json();
    return parsedCVEByKeyword;
}

export function CVEByKeywordPage() {
    const [data, setData] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleEnter = async () => {
        let CVE = await getCVEByKeyword(userInput);
        setData(CVE)

    };
    return (
        <div>
            <section className="select_cve_header">
                <h1>Selected CVE</h1>
                <div>
                    <input
                        className="input"
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        placeholder="Enter keyword"
                    />
                    <button onClick={handleEnter} className="button">Enter</button>
                </div>
            </section>
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
                        {item.notes.split(" ; ").map((note, i) => (
                            <a
                                key={i}
                                href={note}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
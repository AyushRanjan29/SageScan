const API_URL = "http://localhost:5000/api";

const request = async (endpoint, data) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
    }

    return result;
};

export const analyzeCode = async (code, language) => {
    return request("/reviews/analyze", {
    code,
    language
    });
};

export const explainCode = async (code, language) => {
    return request("/reviews/explain", {
    code,
    language
    });
};

export const fixCode = async (code, language) => {
    return request("/reviews/fix", {
    code,
    language
    });
};
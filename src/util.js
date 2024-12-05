export const API_BASE_URL = https://taskly-server-production-e0c1.up.railway.app:8080/api/v1;
import { useState, useEffect } from "react"; 
export const useLocalStorage = (key, defaultValue) => { 
    const [value, setValue] = useState(() => { 
        const currentValue = localStorage.getItem(key); 
        if (currentValue) { 
            return JSON.parse(currentValue) 
        } 
        else { 
            return defaultValue; 
        } 
    }); 
    useEffect(() => { 
        localStorage.setItem(key, JSON.stringify(value)); 
    }, [value]); 
    return [value, setValue]; 
}; 

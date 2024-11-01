export const API_BASE_URL = "https://taskly-server-production-e0c1.up.railway.app:8080";
export const useLocalStorage = (key, defaultValue) => { 
    const [value, setValue] = useState(() => { 
        try {
            const currentValue = localStorage.getItem(key); 
            return currentValue ? JSON.parse(currentValue) : defaultValue; 
        } catch (error) {
            console.error("Ошибка при извлечении данных из localStorage", error);
            return defaultValue; 
        }
    }); 

    useEffect(() => { 
        try {
            localStorage.setItem(key, JSON.stringify(value)); 
        } catch (error) {
            console.error("Ошибка при сохранении данных в localStorage", error);
        }
    }, [value]); 

    return [value, setValue]; 
};

export interface AgeResult {
    years: number;
    months: number;
    days: number;
}

export const calculateAge = (
    birthDay: number,
    birthMonth: number,
    birthYear: number
): AgeResult => {
    const today = new Date();

    let years = today.getFullYear() - birthYear;
    let months = today.getMonth() + 1 - birthMonth;
    let days = today.getDate() - birthDay;

    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
};

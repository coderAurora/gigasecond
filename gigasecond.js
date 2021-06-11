
export const gigasecond = (datetime) => {
    let dt = new Date(datetime);
    dt.setTime(datetime.getTime() + 1000000000000);
    return dt;
};

gigasecond(new Date());
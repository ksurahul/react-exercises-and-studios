export default function HobbyLinks() {
    let hobbyLinks = ["https://www.youtube.com/", "https://coinmarketcap.com/"]

    return (
        <div>
            <a href={hobbyLinks[0]}>Youtube</a>
            <a href={hobbyLinks[1]}>CoinMarketCap</a>
        </div>
    );
}
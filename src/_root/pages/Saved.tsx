import React, { useEffect, useState } from "react";

interface NFT {
    title: string;
    imageUrl: string;
    floorValue: string;
    totalVolume: string;
}

const nfts: NFT[] = [
    {
        title: "Cool Cats",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupw_1POk8pJLZ-6EiHnxnXigzP4EH9w8MyQ&usqp=CAU",
        floorValue: "0.50 ETH",
        totalVolume: "150K ETH"
    },
    {
        title: "Game Lord",
        imageUrl: "https://i.imgur.com/gx9zkI0.jpg",
        floorValue: "2.90 ETH",
        totalVolume: "3650 ETH"
    },
    {
        title: "Seize The Meme",
        imageUrl: "https://i.seadn.io/s/raw/files/10579216d77a7580dd8cf08db689324f.jpg?auto=format&dpr=1&w=1000",
        floorValue: "0.11 ETH",
        totalVolume: "5433 ETH"
    },
    {
        title: "TinFun",
        imageUrl: "https://yang.tinfun.com/images/726.png",
        floorValue: "0.52 ETH",
        totalVolume: "7296 ETH"
    }
];

const Saved = () => {
    const [savedNFTs, setSavedNFTs] = useState<NFT[]>([]);

    useEffect(() => {
        setSavedNFTs(nfts);
    }, []);

    return (
        <div className="flex flex-1">
            <div className="common-container">
                <div className="max-w-5x1 flex-start gap-3 justify-start w-full">
                    <img src="src/assets/icons/add-post.svg" width={36} height={36} alt="add" />
                    <h2 className="h3-bold md:h2-bold text-left w-full">Saved</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {savedNFTs.map((nft, index) => (
                        <div className="nft-box" key={index}>
                            <img src={nft.imageUrl} alt={nft.title} className="w-full h-auto" />
                            <div className="nft-info">
                                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{nft.title}</h3>
                                <p style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Floor Value: {nft.floorValue}</p>
                                <p style={{ fontSize: "1rem" }}>Total Volume: {nft.totalVolume}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Saved;

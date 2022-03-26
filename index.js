const nftName = "NatreeumPracticeNFT";
const description = "This NFT is practicing";
const hiddenImgUrl = "ipfs://QmXihDacRy5v3mTCPQ1W7jPeBjGJDgMsdD81rxgbDNDUtE";
const totalNum = 81;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}
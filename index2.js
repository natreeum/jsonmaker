const nftName = "NatreeumPracticeNFT";
const description = "This NFT is practicing";
const revealedImgUrl = "ipfs://QmeRUSf1MThCpDotXyvKgcdbW4dGc51hneTvMenBLfU69E";
const totalNum = 1;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${revealedImgUrl}/${i}.json","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`revealedjson/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}
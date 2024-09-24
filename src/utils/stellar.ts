export const formatPublicKey = (publicKey: string) => {
    if (publicKey.length <= 10) return publicKey; // In case the key is too short
    return `${publicKey.slice(0, 5)}...${publicKey.slice(-5)}`;
};
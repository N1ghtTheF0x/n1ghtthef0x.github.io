import { BinaryLike, BinaryToTextEncoding, createHash } from "node:crypto"

export function hash(algo: string,value: BinaryLike,encoding: BinaryToTextEncoding = "hex")
{
    return createHash(algo).update(value).digest(encoding)
}
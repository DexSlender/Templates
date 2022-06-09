import { ShardClient } from "detritus-client";

const client = new ShardClient(process.env.token!, {});

export async function start () {
	await client.run()
}

export default client;
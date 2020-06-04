export const environment = {
	production: false,
	endpoints: {},
	keys: {
        backend_keys: {
        	masterDecrypt: "1922ce7ac7c1cab3bfe4e86ad9569c88640668d0d32cb61cbd3",
            masterEncrypt: "192db662d8f28cca3d53afc509bae5a759dd4eaa797ef1b23c94a0f8be714b009ac463b687caecbcc2b00f985583dd45933"
        },
		apiKey: "b8roVckVWh3x96fg09Tp079m66vDBg4G2hBAvuyV"
	},
	time: {
		//timeSessionIdToken: 10,
        //timeSessionRefreshToken: 20,
        timeSession: 300,
	}
}
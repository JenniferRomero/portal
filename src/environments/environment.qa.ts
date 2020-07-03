export const environment = {
	production: false,
	endpoints: {
		accessToken: "https://soyyo-qa.auth.us-east-1.amazoncognito.com/oauth2/token",
		validateToken: "https://ret3omew31.execute-api.us-east-1.amazonaws.com/qa/api/v1/notifications/validate-token",
		generateQR: 'https://jsonplaceholder.typicode.com/posts/1',
		validateEntity: ""
	},
	keys: {
		username: "276aj06a5u5cp7166n4atdpjiv",
		password: "1qnr1d33s85vqrvvorv2u8lnkfjs8tgv6rp173v9cgr0t020mrvq",
		apiKey: "U6wnX5iMhn7ktLD7d7CLf6qg5JNqxB2x2Ss0zC2Z"
	},
	time: {
        timeSession: 300
	}
}
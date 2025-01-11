export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjkzNzI0OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJFRkY0MGFlMjQwNjFkNjhiNTQ4OWJEQTRFQ2IwMjk1RDg5RWRmYTcifQ",
      payload: "eyJkb21haW4iOiJmcmFtZXN2Mi5kMWUwazZzaDQwNGE0cS5hbXBsaWZ5YXBwLmNvbSJ9",
      signature:
        "MHhmZjg0ODZmZDU4ZjMzOTJhODY0MWU3MmRmMTMxY2YyZTNmYjU2YTkwZjU2M2NjMWU5N2EyODA2YzJlOGIxYzk1MGMzNjUxNmE3NjU3MDAzMzRhM2MxYWQ5NDc1NWU3NDMyODgwMTkzY2Q1MjlmOWJlMDgyM2RmYmYyZTgyNjYxMTFj",
    },
    frame: {
      version: "1",
      name: "Frames v2 Demo",
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}

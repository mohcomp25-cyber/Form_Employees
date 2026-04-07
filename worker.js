addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const N8N_WEBHOOK = "https://dwadawdawd.app.n8n.cloud/webhook/Form_Employees";

async function handleRequest(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    })
  }

  if (request.method === "POST") {
    const body = await request.text()
    const response = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body
    })
    return new Response(await response.text(), {
      status: response.status,
      headers: { "Access-Control-Allow-Origin": "*" }
    })
  }

  return new Response("OK", { status: 200 })
}

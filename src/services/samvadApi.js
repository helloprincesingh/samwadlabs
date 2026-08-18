const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Create an AI voice agent.
 *
 * NOTE:
 * Endpoint and payload will be adjusted according to
 * your actual Samvad backend API.
 */
export async function createAgent(agentData) {
  const response = await fetch(`${API_BASE_URL}/api/agents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(agentData),
  });

  if (!response.ok) {
    throw new Error("Failed to create AI agent");
  }

  return response.json();
}

/**
 * Start an outbound call.
 *
 * NOTE:
 * Endpoint will be connected to your actual
 * voice/calling backend.
 */
export async function startCall(callData) {
  const response = await fetch(`${API_BASE_URL}/api/calls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(callData),
  });

  if (!response.ok) {
    throw new Error("Failed to start call");
  }

  return response.json();
}

/**
 * Get call status.
 */
export async function getCallStatus(callId) {
  const response = await fetch(
    `${API_BASE_URL}/api/calls/${callId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch call status");
  }

  return response.json();
}

/**
 * Get call transcript/result.
 */
export async function getCallResult(callId) {
  const response = await fetch(
    `${API_BASE_URL}/api/calls/${callId}/result`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch call result");
  }

  return response.json();
}
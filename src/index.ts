export default {
  async fetch(request, env) {
    // Run a SQL query using the D1 binding
    const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();

    // Return the results as a JSON response
    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  },
} satisfies ExportedHandler<Env>;

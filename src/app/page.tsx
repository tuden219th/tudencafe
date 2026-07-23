export default function HomePage() {
  return (
    <main>

      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            letterSpacing: "12px",
            color: "#ff7a00",
          }}
        >
          TỪ ĐẾN
        </h1>

        <p
          style={{
            marginTop: 20,
            color: "#999",
            fontSize: "20px",
          }}
        >
          Không chỉ là cà phê, mà là một hành trình.
        </p>
      </section>

    </main>
  );
}
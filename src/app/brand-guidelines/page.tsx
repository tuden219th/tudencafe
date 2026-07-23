import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines | Từ Đến Cafe",
  description:
    "Bộ hướng dẫn nhận diện thương hiệu Từ Đến — chiến lược, logo, màu sắc, chữ viết và ứng dụng.",
};

const PILLARS = [
  { t: "Điềm tĩnh", d: "Không vội vã, không phô trương" },
  { t: "Trưởng thành", d: "Nói ít, nhưng nói đúng" },
  { t: "Ấm áp", d: "Gần gũi mà không suồng sã" },
  { t: "Chân thành", d: "Không tô vẽ, không cường điệu" },
  { t: "Hy vọng", d: 'Luôn có một "đến" phía trước' },
];

const PRIMARY_COLORS = [
  { name: "Copper", hex: "#B5583A", note: 'Màu chính — chỉ dùng cho "đến" và các điểm nhấn nhỏ.' },
  { name: "Roast ink", hex: "#221C16", note: "Đen ấm cho chữ và nét vẽ. Không dùng đen tuyệt đối." },
  { name: "Paper", hex: "#F4EEE3", note: "Nền chính — mờ, gần với vải lanh thô." },
  { name: "Clay grey", hex: "#8C8071", note: "Chú thích, đường kẻ, chữ phụ." },
];

const SECONDARY_COLORS = [
  { name: "Sage", hex: "#7C8362", note: "Từ Đến Workspace" },
  { name: "Ink blue", hex: "#435160", note: "Từ Đến Books" },
  { name: "Rust deep", hex: "#8C3B22", note: "Từ Đến Studio" },
  { name: "Sand", hex: "#C9B896", note: "Từ Đến Community" },
];

const TYPE_SPECIMEN = [
  { sample: "Từ Đến", meta: "H1 · Fraunces Light 44/52", style: { fontSize: 44, fontWeight: 300 } },
  { sample: "Hành trình của bạn", meta: "H2 · Fraunces Regular 28/36", style: { fontSize: 28, fontWeight: 400 } },
  { sample: "Không gian dừng chân", meta: "H3 · Be Vietnam Pro Medium 16", style: { fontFamily: "var(--td-sans)", fontSize: 16, fontWeight: 500 } },
  {
    sample: "Mỗi ly cà phê là một khoảng lặng để bạn nhìn lại chặng đường đã qua.",
    meta: "Body · Be Vietnam Pro 14/24",
    style: { fontFamily: "var(--td-sans)", fontSize: 14, fontWeight: 400 },
  },
  {
    sample: "Chú thích — hà nội, 2026",
    meta: "Caption · 11 · uppercase",
    style: { fontFamily: "var(--td-sans)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--td-clay)" },
  },
];

const ARCHITECTURE = [
  { color: "var(--td-copper)", label: "Coffee" },
  { color: "var(--td-sage)", label: "Workspace" },
  { color: "var(--td-rust)", label: "Studio" },
  { color: "var(--td-inkblue)", label: "Books" },
  { color: "var(--td-sand)", label: "Community" },
];

const DONTS = [
  { label: "từ đến", style: { transform: "scaleX(1.6)", display: "inline-block" }, cap: "Kéo giãn tỷ lệ chữ" },
  { label: "từ đến", style: { boxShadow: "6px 6px 0 var(--td-hair)", display: "inline-block" }, cap: "Thêm đổ bóng, hiệu ứng nổi" },
  { label: "từđến", style: {}, cap: "Đóng khoảng cách chuyển tiếp" },
  { label: "từ đến", style: { transform: "rotate(-8deg)", display: "inline-block" }, cap: "Xoay nghiêng wordmark" },
  { label: "từ đến", style: { color: "#3B6EA5" }, cap: "Đổi màu ngoài bảng màu" },
  { label: "từ đến", style: { fontFamily: "var(--td-sans)", fontWeight: 700 }, cap: "Thay bằng font khác" },
];

export default function BrandGuidelinesPage() {
  return (
    <div className="gl-page">
      <div className="gl-intro">
        <div className="kicker">Nội bộ — Đối tác</div>
        <div className="t">
          từ <span className="gl-to">đến</span> — brand guidelines
        </div>
      </div>

      <div className="gl-wrap">
        <section className="gl-section-tight">
          <div className="gl-eyebrow">Mục lục</div>
          <div className="gl-toc">
            {[
              "Chiến lược thương hiệu",
              "Ý nghĩa tên gọi",
              "Hệ thống logo",
              "Bảng màu mở rộng",
              "Hệ thống chữ",
              "Ngôn ngữ đồ họa",
              "Kiến trúc thương hiệu",
              "Ứng dụng",
              "Nguyên tắc sử dụng",
              "Tuyên ngôn",
            ].map((title, i) => (
              <a key={title} href={`#s${i + 1}`}>
                <span>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  {title}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 01 — Chiến lược */}
      <div className="gl-wrap" id="s1">
        <section className="gl-section">
          <div className="gl-chno">01</div>
          <h2 className="gl-head">Chiến lược thương hiệu</h2>
          <div className="gl-grid2">
            <div>
              <p className="gl-lede">
                <b style={{ fontWeight: 500, color: "var(--td-ink)" }}>Sứ mệnh —</b> Tạo ra những không
                gian, vật phẩm và khoảnh khắc giữ người ta lại đủ lâu trong quãng chuyển tiếp của
                chính họ, để họ bước tiếp một cách vững vàng hơn.
              </p>
              <p className="gl-lede">
                <b style={{ fontWeight: 500, color: "var(--td-ink)" }}>Tầm nhìn —</b> Trở thành người
                bạn đồng hành lặng lẽ cho những chuyển tiếp cá nhân tại Việt Nam — không giới hạn
                trong một tách cà phê.
              </p>
            </div>
            <div>
              <div className="gl-quote">
                Với những ai đang ở giữa hành trình của chính mình — sự nghiệp, một mối quan hệ, hay
                chính bản thân — <span className="gl-to">Từ Đến</span> là nơi dừng chân đủ chậm để
                nhìn lại, và đủ ấm để bước tiếp.
              </div>
            </div>
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 36 }}>
            Tính cách thương hiệu
          </div>
          <div className="gl-pillars">
            {PILLARS.map((p) => (
              <div className="p" key={p.t}>
                <div className="t">{p.t}</div>
                <div className="d">{p.d}</div>
              </div>
            ))}
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 36 }}>
            Giọng nói thương hiệu
          </div>
          <div className="gl-voice">
            <div className="col yes">
              <div className="h">Nên</div>
              <div className="line">"Hôm nay bạn đang ở đâu trong hành trình của mình?"</div>
              <div className="line">Câu ngắn, động từ rõ, khoảng lặng giữa các câu.</div>
              <div className="line">Nói với người đọc như một người bạn đã đi trước một đoạn.</div>
            </div>
            <div className="col no">
              <div className="h">Tránh</div>
              <div className="line">"Ưu đãi 20% — nhanh tay kẻo lỡ!"</div>
              <div className="line">Ngôn ngữ marketing hối thúc, chấm than, viết hoa toàn bộ.</div>
              <div className="line">Ẩn dụ sáo rỗng về cà phê (đánh thức, năng lượng, tỉnh táo).</div>
            </div>
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 02 — Ý nghĩa tên gọi */}
      <div className="gl-wrap" id="s2">
        <section className="gl-section">
          <div className="gl-chno">02</div>
          <h2 className="gl-head">Ý nghĩa tên gọi</h2>
          <p className="gl-lede">
            "Từ Đến" không mô tả một tuyến đường, mà mô tả mọi sự chuyển dịch có ý nghĩa trong đời
            người: từ hoang mang đến tự tin, từ ước mơ đến hiện thực, từ hôm nay đến ngày mai. Cà phê
            chỉ là chất xúc tác — là chiếc bàn nơi những chuyển dịch ấy được ngồi xuống, được gọi tên,
            được cho phép diễn ra chậm rãi.
          </p>
          <p className="gl-lede">
            Chính vì vậy, thương hiệu không được thiết kế như một quán cà phê, mà như một hệ thống có
            thể lớn lên cùng những hành trình khác: không gian làm việc, sách, podcast, cộng đồng,
            workshop — mọi thứ đều có thể mang một "từ" và một "đến" của riêng nó.
          </p>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 03 — Hệ thống logo */}
      <div className="gl-wrap" id="s3">
        <section className="gl-section">
          <div className="gl-chno">03</div>
          <h2 className="gl-head">Hệ thống logo</h2>
          <p className="gl-lede">
            Wordmark chính, quy tắc dựng hình, khoảng trắng an toàn, kích thước tối thiểu và các lỗi
            sử dụng cần tránh.
          </p>

          <div className="gl-word-lg">
            từ<span className="gap" />
            <span className="gl-to">đến</span>
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 34 }}>
            Quy tắc dựng hình
          </div>
          <div className="gl-construct">
            <div className="guide" style={{ top: 20 }} />
            <div className="guide" style={{ bottom: 20 }} />
            <div className="gl-word-lg" style={{ fontSize: 56 }}>
              từ<span className="gap" style={{ width: 64 }} />
              <span className="gl-to">đến</span>
            </div>
            <div className="caption">
              khoảng cách "từ ↔ đến" ≈ 1.15 × chiều cao chữ hoa · không dấu nối, không đường kẻ
            </div>
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 34 }}>
            Khoảng trắng an toàn
          </div>
          <div className="gl-clearspace">
            <div className="gl-word-lg" style={{ fontSize: 44 }}>
              từ<span className="gap" style={{ width: 48 }} />
              <span className="gl-to">đến</span>
            </div>
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 34 }}>
            Kích thước tối thiểu
          </div>
          <div className="gl-minsize">
            <div className="m no">
              <div className="word" style={{ fontFamily: "var(--td-display)", fontSize: 14 }}>từ đến</div>
              <div className="lab">Dưới 12mm — không dùng</div>
            </div>
            <div className="m">
              <div className="word" style={{ fontFamily: "var(--td-display)", fontSize: 22 }}>từ đến</div>
              <div className="lab">18mm — tối thiểu in ấn</div>
            </div>
            <div className="m">
              <div className="word" style={{ fontFamily: "var(--td-display)", fontSize: 32 }}>từ đến</div>
              <div className="lab">Kỹ thuật số ≥ 120px</div>
            </div>
          </div>

          <div className="gl-eyebrow" style={{ marginTop: 34 }}>
            Không được làm
          </div>
          <div className="gl-dont">
            {DONTS.map((d, i) => (
              <div className="d" key={i}>
                <div className="badge">✕</div>
                <div className="word" style={{ fontFamily: "var(--td-display)", fontSize: 26, ...d.style }}>
                  {d.label}
                </div>
                <div className="cap">{d.cap}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 04 — Bảng màu */}
      <div className="gl-wrap" id="s4">
        <section className="gl-section">
          <div className="gl-chno">04</div>
          <h2 className="gl-head">Bảng màu mở rộng</h2>
          <p className="gl-lede">
            Bốn màu lõi giữ bản sắc chính; bốn màu phụ dùng để phân biệt các nhánh thương hiệu ở
            chương 07 — luôn phẳng, không gradient, không bóng.
          </p>
          <div className="gl-eyebrow" style={{ marginTop: 10 }}>Lõi</div>
          <div className="gl-swatches">
            {PRIMARY_COLORS.map((c) => (
              <div className="gl-sw" key={c.hex}>
                <div className="chip" style={{ background: c.hex }} />
                <div className="info">
                  <div className="name">{c.name}</div>
                  <div className="hex">{c.hex}</div>
                  <div className="note">{c.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="gl-eyebrow" style={{ marginTop: 26 }}>Phụ — dùng cho nhánh thương hiệu</div>
          <div className="gl-swatches">
            {SECONDARY_COLORS.map((c) => (
              <div className="gl-sw" key={c.hex}>
                <div className="chip" style={{ background: c.hex }} />
                <div className="info">
                  <div className="name">{c.name}</div>
                  <div className="hex">{c.hex}</div>
                  <div className="note">{c.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 05 — Hệ thống chữ */}
      <div className="gl-wrap" id="s5">
        <section className="gl-section">
          <div className="gl-chno">05</div>
          <h2 className="gl-head">Hệ thống chữ</h2>
          <p className="gl-lede">
            Fraunces cho tiêu đề, giữ trọng lượng nhẹ để không đọc như một biển hiệu quảng cáo. Be
            Vietnam Pro cho phần nội dung — được thiết kế riêng cho dấu tiếng Việt, không lệch dấu,
            không vỡ nét khi in nhỏ.
          </p>
          <div className="gl-specimen">
            {TYPE_SPECIMEN.map((row, i) => (
              <div className="row" key={i}>
                <div className="sample" style={row.style}>{row.sample}</div>
                <div className="meta">{row.meta}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 06 — Ngôn ngữ đồ họa */}
      <div className="gl-wrap" id="s6">
        <section className="gl-section">
          <div className="gl-chno">06</div>
          <h2 className="gl-head">Ngôn ngữ đồ họa</h2>
          <p className="gl-lede">
            Không hoa văn, không icon minh họa. Nhịp điệu hình ảnh duy nhất của thương hiệu là chính
            khoảng-cách-chuyển-tiếp trong wordmark, lặp lại thành một dải nhịp — dùng làm đường phân
            cách trang, mép bao bì, hoặc nền mờ.
          </p>
          <div className="gl-pattern">
            {[14, 22, 32, 44, 58, 44, 32, 22, 14].map((h, i) => (
              <div className="bar" key={i} style={{ height: h, opacity: 0.25 + (h / 58) * 0.75 }} />
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 07 — Kiến trúc thương hiệu */}
      <div className="gl-wrap" id="s7">
        <section className="gl-section">
          <div className="gl-chno">07</div>
          <h2 className="gl-head">Kiến trúc thương hiệu</h2>
          <p className="gl-lede">
            Mọi nhánh đều dùng chung một wordmark — chỉ khác nhau ở nhãn phụ và một màu nhấn duy nhất
            từ bảng màu phụ. Hệ thống không cần thiết kế lại khi mở rộng.
          </p>
          <div className="gl-arch">
            {ARCHITECTURE.map((a) => (
              <div className="a" key={a.label}>
                <div className="dot" style={{ background: a.color }} />
                <div className="word">từ đến</div>
                <div className="sub">{a.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 08 — Ứng dụng */}
      <div className="gl-wrap" id="s8">
        <section className="gl-section">
          <div className="gl-chno">08</div>
          <h2 className="gl-head">Ứng dụng</h2>
          <div className="gl-appgrid">
            <div className="gl-appcard">
              <div className="stage">
                <div className="gl-card-mock">
                  <div className="fw">
                    từ <span className="gl-to">đến</span>
                  </div>
                  <div className="row"><span>studio</span><span>hà nội</span></div>
                </div>
              </div>
              <div className="meta">
                <div className="t">Danh thiếp</div>
                <div className="d">Wordmark đảo màu trên nền ink, nhấn copper một chữ.</div>
              </div>
            </div>

            <div className="gl-appcard">
              <div className="stage">
                <div className="gl-cup-mock">
                  <div className="band"><div className="word">từ đến</div></div>
                </div>
              </div>
              <div className="meta">
                <div className="t">Ly / sleeve</div>
                <div className="d">Một dải copper, không hình minh hoạ tách cà phê.</div>
              </div>
            </div>

            <div className="gl-appcard">
              <div className="stage">
                <div className="gl-stamp-mock">
                  <div className="inner">
                    TĐ<span className="bar" />
                  </div>
                </div>
              </div>
              <div className="meta">
                <div className="t">Con dấu / khắc laser</div>
                <div className="d">Chỉ dùng monogram, rõ nét ở kích thước 15mm.</div>
              </div>
            </div>

            <div className="gl-appcard">
              <div className="stage">
                <div className="gl-social-mock">
                  <div className="fw">
                    từ
                    <br />
                    <span className="gl-to">đến</span>
                  </div>
                </div>
              </div>
              <div className="meta">
                <div className="t">Avatar mạng xã hội</div>
                <div className="d">Wordmark xếp hai dòng, nền ink đặc.</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 09 — Nguyên tắc sử dụng */}
      <div className="gl-wrap" id="s9">
        <section className="gl-section">
          <div className="gl-chno">09</div>
          <h2 className="gl-head">Nguyên tắc sử dụng</h2>
          <div className="gl-dogrid">
            <div className="g yes">
              <div className="h">Luôn luôn</div>
              <ul>
                <li>Giữ khoảng trắng an toàn quanh wordmark</li>
                <li>Dùng copper cho đúng một từ trong lockup</li>
                <li>Kiểm tra bản in đen trắng trước khi duyệt</li>
                <li>Giữ dấu tiếng Việt rõ nét ở mọi kích thước</li>
              </ul>
            </div>
            <div className="g no">
              <div className="h">Không bao giờ</div>
              <ul>
                <li>Thêm icon, biểu tượng cà phê vào logo</li>
                <li>Dùng gradient, đổ bóng, hiệu ứng bóng gương</li>
                <li>Thay đổi khoảng cách "từ ↔ đến"</li>
                <li>Kết hợp quá hai màu trong một ứng dụng</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <hr className="gl-rule" />

      {/* 10 — Tuyên ngôn */}
      <div className="gl-wrap" id="s10">
        <div className="gl-close">
          <div className="gl-chno" style={{ display: "block", marginBottom: 10 }}>10</div>
          <div className="stmt">
            Đừng thiết kế một logo cho quán cà phê.
            <br />
            Hãy thiết kế một biểu tượng cho <span className="gl-to">hành trình con người</span>.
            <br />
            Từ nơi bạn đang đứng — đến nơi bạn muốn tới.
          </div>
          <div className="en">Not a logo for a coffee shop — a symbol for human journeys</div>
        </div>
      </div>
    </div>
  );
}
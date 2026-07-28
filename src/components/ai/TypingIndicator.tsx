"use client";

export default function TypingIndicator() {

    return (

        <div className="inline-flex items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow">

            <span className="h-2 w-2 animate-bounce rounded-full bg-orange-400"></span>

            <span
                className="h-2 w-2 animate-bounce rounded-full bg-orange-400"
                style={{ animationDelay: "150ms" }}
            />

            <span
                className="h-2 w-2 animate-bounce rounded-full bg-orange-400"
                style={{ animationDelay: "300ms" }}
            />

        </div>

    );

}
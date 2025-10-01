// the point of these parallel routes, is that, if the content is "larger" than a simple element, but a "mini app",
// within the app so to say - they can then hae their own layouts, error.tsx, loading.tsx, etc, and so function as an independent unit

//subnavigation - see more https://www.youtube.com/watch?v=k7o9R6eaSes - around 2h 5 min or maybe even better - https://www.youtube.com/watch?v=wi8kF8UniUI

export default function ParallelRoutedSlotsLayout({
    children,
    route1,
    route2,
    route3,
}: {
    children: React.ReactNode;
    route1: React.ReactNode;
    route2: React.ReactNode;
    route3: React.ReactNode;
}) {
    return (
        <>
            <div>
                <div>{children}</div>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "grid" }}>
                        <div>{route1}</div>
                        <div>{route2}</div>
                    </div>
                    <div style={{ display: "flex", flex: 1 }}>{route3}</div>
                </div>
            </div>
        </>
    );
}

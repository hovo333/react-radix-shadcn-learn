interface PanelProps {
    children: React.ReactNode;
}

export function Panel({ children }: PanelProps) {
    return (
        <div className="rounded-lg border p-6 shadow-sm">
            {children}
        </div>
    );
}
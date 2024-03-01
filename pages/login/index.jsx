import "@/app/globals.css";
import ConnectionForm from "@/components/connection/ConnectionForm";

function LoginPage() {
    return (
        <>
            <ConnectionForm connectionType="login" />
        </>
    );
}

export default LoginPage;

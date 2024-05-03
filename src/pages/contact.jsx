import Container from "@/components/container";
import Layout from "@/components/layout";
import { Input } from "@nextui-org/react";

export default function Services() {
    return (
        <Layout>
            <main className=" h-screen">
                <Container>
                    <div className="flex justify-center items-center">
                        <form action="">
                            <Input type="email" variant="underlined" label="Email" />
                            <Input type="email" variant="underlined" label="Email" />
                            <Input type="email" variant="underlined" label="Email" />

                        </form>
                    </div>
                </Container>
            </main>
        </Layout>
    );
}

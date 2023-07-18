import React from "react";
import { FullpageSection } from '@ap.cx/react-fullpage';
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";

export default function Contact() {
  return (
    <FullpageSection>
      <div class="flex items-center justify-center relative h-full w-full">
        <Card color="transparent" shadow={false}>
          <div className="text-center">
            <Typography variant="h2" color="blue-gray">
              Contactez-moi
            </Typography>
          </div>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Textarea label="Message" />
            </div>
            <Button className="mt-6" fullWidth>
              Envoyer
            </Button>
          </form>
        </Card>
      </div>
    </FullpageSection>
  );
}
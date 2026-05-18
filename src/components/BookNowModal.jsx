"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { TiTick } from "react-icons/ti";

export function BookNowModal({ car }) {

   const {_id, brand, model, speed, rating, category, seats, image, transmission, fuel, description, pricePerDay, available, location} = car;
   
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user,"user");
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      router.push("/login");
      return;
    }

    const formData = new FormData(e.target);
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      UserName: user.name,
      carId: _id,
      model,
      image,
      pricePerDay,
      category,
      location
    };
    console.log(bookingData,"booking");

     const res = await fetch("http://localhost:5000/carBooking", {
        method: "POST",
        headers: {
         "content-type": "application/json"
         },
        body: JSON.stringify(bookingData),
      })
    const data = await res.json();
    console.log(data,"data");
    alert("You booked successfully")
  };
  return (
    <Modal>
      <Button
        className="flex-1 py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
        isDisabled={!car.available}
      >
        {car.available ? "Book Now →" : "Not Available"}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Booking from</Modal.Heading>
              <h2 className="font-bold text-xl">{`${car.brand} ${car.model}`}</h2>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <Select
                    name="driverNeeded"
                    isRequired
                    className="w-full"
                    placeholder="Select option"
                  >
                    <Label className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">
                      Driver Needed
                    </Label>
                    <Select.Trigger className="rounded-lg" isRequired>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="yes" textValue="Yes">
                          <TiTick /> Yes
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="no" textValue="No">
                          No
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <TextField className="w-full" name="message">
                    <Label>Special Note</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <Modal.Footer>
                    <Button
                      type="submit"
                      className={
                        "w-full flex-1 py-6 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
                      }
                    >
                      Book Now
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

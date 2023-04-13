import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import mapboxgl from "mapbox-gl";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

mapboxgl.accessToken = import.meta.env.VITE_MATBOX_SECRET;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-70.6730233, 19.4398451],
        zoom: 8,
      });
      new mapboxgl.Marker().setLngLat([-70.6730233, 19.4398451]).addTo(map);
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email || !form.issue || !form.message || !form.name) return;
    setLoading(true);

    emailjs
      .send(
        "service_cjjfu2d",
        "template_tqhkegr",
        {
          from_name: form.name,
          to_name: "Oscar Martínez",
          from_email: form.email,
          to_email: "oscarmiguel12002@gmail.com",
          message: form.message,
          subject: form.issue,
        },
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(() => {
        setForm({
          name: "",
          email: "",
          issue: "",
          message: "",
        });
        toast("Gracias. Me pondré en contacto contigo lo más pronto posible");
      })
      .catch((err) => {
        console.log(err);
        toast("Algo salió mal. Intentalo más tarde");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="min-h-screen w-full">
      <motion.div variants={textVariant(0.2)}>
        <h1 className="font-bold text-[50px]">Contáctame</h1>
      </motion.div>
      <div className="w-full flex gap-10 md:flex-row flex-col">
        <div className="md:w-[40%] w-full">
          <form
            onSubmit={handleSubmit}
            className="mt-16 bg-secondary rounded-lg xs:p-10 p-4"
          >
            <div className="flex flex-col mb-4">
              <label className="text-[18px]">Nombre:</label>
              <input
                onChange={handleChange}
                value={form.name}
                name="name"
                className="px-3 py-2 rounded-md outline-none bg-primary mt-2"
                type="text"
                placeholder="Tu nombre"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-[18px]">Email:</label>
              <input
                onChange={handleChange}
                value={form.email}
                name="email"
                className="px-3 py-2 rounded-md outline-none bg-primary mt-2"
                type="text"
                placeholder="Tu email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-[18px]">Asunto:</label>
              <input
                onChange={handleChange}
                value={form.issue}
                name="issue"
                className="px-3 py-2 rounded-md outline-none bg-primary mt-2"
                type="text"
                placeholder="Ausnto del email"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-[18px]">Mensaje:</label>
              <textarea
                rows={7}
                onChange={handleChange}
                value={form.message}
                name="message"
                className="px-3 py-2 rounded-md outline-none bg-primary mt-2"
                placeholder="Tu mensaje"
              />
            </div>
            <div className="w-full">
              <button className="bg-tertiary w-full p-2 rounded-md text-black font-bold shadow-sm shadow-primary flex justify-center">
                {loading ? (
                  <ReactLoading
                    type="spin"
                    color="#000"
                    height={25}
                    width={25}
                  />
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </form>
        </div>
        <div
          ref={mapContainer}
          className="rounded-lg md:w-[60%] w-full md:h-auto h-[500px] md:mt-16"
        ></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

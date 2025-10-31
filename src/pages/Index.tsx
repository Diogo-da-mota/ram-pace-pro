import Header from "@/components/Header";
import SocialCard from "@/components/SocialCard";
import EventCard from "@/components/EventCard";
import SectionHeader from "@/components/SectionHeader";
import FAQItem from "@/components/FAQItem";
import { MessageCircle, Instagram, Clock } from "lucide-react";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Social Section */}
        <section>
          <SectionHeader title="Redes" subtitle="Sociais" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <SocialCard
              icon={<MessageCircle className="h-16 w-16" />}
              title="Grupo do WhatsApp"
              subtitle="PACE RAM X 🏃"
              gradient="bg-whatsapp"
              url="https://whatsapp.com"
            />
            <SocialCard
              icon={<Instagram className="h-16 w-16" />}
              title="PACE RAM"
              subtitle="Feriado"
              gradient="bg-gradient-to-br from-instagram-start to-instagram-end"
              url="https://instagram.com"
            />
          </div>
        </section>

        {/* Recent Events Section */}
        <section>
          <SectionHeader title="Corridas" subtitle="Recentes" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              image={event1}
              date="30/10/2025"
              location="Rio Verde - GO"
              title="BORRA CORRER SERVIDOR"
              status="open"
            />
            <EventCard
              image={event2}
              date="26/10/2025"
              location="Rio Verde - GO"
              title="Corrida Far Night Neon 2025"
              status="open"
            />
            <EventCard
              image={event3}
              date="18/10/2025"
              location="Rio Verde - GO"
              title="MOVIMENTO PELA VIDA SEM CÂNCER"
              status="open"
            />
            <EventCard
              image={event4}
              date="20/09/2025"
              location="Jataí-Go"
              title="Vigoro Run"
              status="open"
            />
            <EventCard
              image={event5}
              date="31/08/2025"
              location="Rio verde"
              title="Photos Circuito Eletro Center 26 Anos"
              status="open"
            />
            <EventCard
              image={event6}
              date="23/08/2025"
              location="Rio verde"
              title="Correndo com Vinho Primeira edição"
              status="open"
            />
          </div>
        </section>

        {/* Coming Soon Section */}
        <section>
          <SectionHeader 
            icon={<Clock className="h-8 w-8" />}
            title="Em" 
            subtitle="Breve" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EventCard
              image={event1}
              date="08/11/2025"
              location="Jataí goias"
              title="1° Corrida do Time Larissa Peres"
              status="open"
            />
            <EventCard
              image={event2}
              date="16/11/2025"
              location="Ipora - Goiás"
              title="Corrida de Rua Iporá 1° Edição"
              status="closed"
            />
            <EventCard
              image={event3}
              date="12/12/2025"
              location="Rio Verde-..."
              title="Maratona Dr.Gordon 2025"
              status="open"
            />
            <EventCard
              image={event4}
              date="14/12/2025"
              location="Rio Verde-..."
              title="1° Corre Center"
              status="closed"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Dúvidas e Links externos
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem 
              question="Acessar as minhas Fotos"
              url="https://photos.example.com"
            />
            <FAQItem 
              question="Como fazer o download das minhas fotos?"
              url="https://help.example.com"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 PACE RAM. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;

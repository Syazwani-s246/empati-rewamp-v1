const MissionStatement: React.FC = () => {
  return (
    <div className="mt-20 text-center">
      <div className="max-w-4xl mx-auto p-8 bg-secondary/10 rounded-3xl border border-secondary/20 shadow-warm">
        <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
          "Kami percaya kesembuhan lahir dari sokongan bersama. Setiap individu membawa kekuatan tersendiri, mencipta ruang di mana kasih sayang menjadi sumber pemulihan."
        </blockquote>
        <cite className="text-lg text-primary font-semibold">
          — Komuniti NGO Empati
        </cite>
      </div>
    </div>
  );
};

export default MissionStatement;
import Airtable from 'airtable';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string;
  photo: string;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID || '');
  
  const records = await base(process.env.AIRTABLE_TABLE_ID || '')
    .select({ sort: [{ field: 'Order', direction: 'asc' }] })
    .all();
  
  return records.map((record) => ({
    id: record.id,
    name: record.fields.Name as string,
    title: record.fields.Title as string,
    bio: record.fields.Bio as string,
    email: record.fields.Email as string,
    linkedin: record.fields.LinkedIn as string,
    photo: (record.fields.Photo as unknown as Array<{ url: string }>)?.[0]?.url || '',
  }));
}

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <div style={{ fontFamily: 'Candara, sans-serif' }} className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-full.png" alt="Linea Capital" width={200} height={48} className="h-12" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#4a7c71] transition">Home</Link>
            <Link href="/team" className="text-[#4a7c71] font-semibold">Team</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6" style={{ color: '#1a1f4d' }}>
            Our Team
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                {member.photo && (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="w-64 h-64 object-cover rounded-lg mx-auto mb-6"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#1a1f4d' }}>
                  {member.name}
                </h3>
                <p className="text-lg mb-4" style={{ color: '#4a7c71' }}>
                  {member.title}
                </p>
                {member.bio && (
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                )}
                <div className="flex justify-center space-x-4">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-[#4a7c71]">
                      Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#4a7c71]">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { profileData } from '@/lib/data';
import { ProfileSection } from '@/components/linktree/profile-section';
import { LinkButton } from '@/components/linktree/link-button';
import { SocialIcons } from '@/components/linktree/social-icons';
import { Footer } from '@/components/linktree/footer';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 md:py-24">
      <div className="container max-w-md">
        <ProfileSection profile={profileData} />
        
        <div className="mt-8 space-y-4">
          {profileData.links.map((link, index) => (
            <LinkButton key={link.id} link={link} index={index} />
          ))}
        </div>
        
        <div className="mt-8">
          <SocialIcons socialLinks={profileData.socialLinks} />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
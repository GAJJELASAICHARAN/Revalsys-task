'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useAuth } from '@/lib/auth-context';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const updateName = useMutation(api.users.updateName);

  const [isEditingName, setIsEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const canEditName = useMemo(() => Boolean(user && !user.isGuest), [user]);

  useEffect(() => {
    if (!isLoading && !user) router.replace('/login?redirect=/account/profile');
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!user) return;
    setNameDraft(user.name ?? '');
  }, [user?.name]);

  if (isLoading || !user) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
          <div className="animate-pulse text-[#565959]">Loading profile…</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f3f3]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-[#0f1111] mb-4">Account Details</h1>
          <div className="bg-white border border-[#ddd] rounded p-6 space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FF9900]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-[#FF9900]">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0f1111]">{user.name}</p>
                <p className="text-sm text-[#565959]">{user.email || '—'}</p>
              </div>
            </div>

            {canEditName && (
              <div className="pt-2 border-t border-[#eee]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[#0f1111]">Name</p>
                  {!isEditingName ? (
                    <button
                      onClick={() => {
                        setSaveError(null);
                        setNameDraft(user.name ?? '');
                        setIsEditingName(true);
                      }}
                      className="text-sm text-[#0066c0] hover:underline"
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSaveError(null);
                        setNameDraft(user.name ?? '');
                        setIsEditingName(false);
                      }}
                      className="text-sm text-[#565959] hover:underline"
                    >
                      Cancel
                    </button>
                  )}
                </div>

                {isEditingName && (
                  <form
                    className="mt-3 space-y-2"
                    onSubmit={async e => {
                      e.preventDefault();
                      setSaveError(null);
                      setIsSaving(true);
                      try {
                        await updateName({ name: nameDraft });
                        setIsEditingName(false);
                      } catch (err: any) {
                        setSaveError(err?.message ?? 'Failed to update name');
                      } finally {
                        setIsSaving(false);
                      }
                    }}
                  >
                    <input
                      value={nameDraft}
                      onChange={e => setNameDraft(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full h-10 px-3 text-sm border border-[#ddd] rounded focus:outline-none focus:ring-2 focus:ring-[#FF9900]/30"
                      disabled={isSaving}
                      autoFocus
                    />
                    {saveError && <p className="text-sm text-[#cc0c39]">{saveError}</p>}
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="w-full bg-[#FFD814] hover:bg-[#F7CA00] disabled:opacity-60 text-[#0f1111] text-sm font-semibold border border-[#FCD200] rounded py-2"
                    >
                      {isSaving ? 'Saving…' : 'Save name'}
                    </button>
                    <p className="text-xs text-[#565959]">
                      This updates your account name shown across the site.
                    </p>
                  </form>
                )}
              </div>
            )}

            <button
              onClick={() => logout().then(() => router.push('/'))}
              className="flex items-center gap-2 text-sm text-[#cc0c39] hover:underline"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>

            <div className="text-xs text-[#565959] pt-2">
              Tip: Manage your saved items in <Link href="/account/wishlist" className="text-[#0066c0] hover:underline">Wishlist</Link>.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


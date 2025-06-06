"use client";

import { FooterDialog } from "./footer-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Stay Connected */}
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">Stay Connected</h2>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Join our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="mt-4 flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="max-w-[200px]"
                            />
                            <Button type="submit" variant="default">
                                OK
                            </Button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
                        <nav className="mt-4 flex flex-col space-y-2">
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Home</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Services</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Products</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
                        </nav>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-muted-foreground">123 Executive Road</p>
                            <p className="text-sm text-muted-foreground">New City, TC 12345</p>
                            <p className="text-sm text-muted-foreground">Phone: (555) 123-4567</p>
                            <p className="text-sm text-muted-foreground">Email: info@flexlore.com</p>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">Follow Us</h2>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t pt-8">
                    <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:gap-0">
                        <div className="flex items-center gap-4">
                            <p className="text-center text-sm text-muted-foreground md:text-left">
                                © 2024 Your Company. All rights reserved.
                            </p>
                            <ThemeToggle />
                        </div>
                        <nav className="flex justify-center gap-4 md:justify-end">
                            <FooterDialog
                                title="Gizlilik Politikası"
                                triggerText="Gizlilik Politikası"
                            >
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Veri Toplama ve Kullanım</h3>
                                    <p>
                                        Flexlore Inc. olarak, gizliliğinize saygı duyuyor ve verilerinizi korumaya önem veriyoruz.
                                        Bu politika, hangi verileri topladığımızı ve nasıl kullandığımızı açıklar.
                                    </p>
                                    <h3 className="font-semibold">Çerezler ve İzleme</h3>
                                    <p>
                                        Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz.
                                        Bu çerezler, tercihlerinizi hatırlamak ve site kullanımını analiz etmek için kullanılır.
                                    </p>
                                    <h3 className="font-semibold">Veri Güvenliği</h3>
                                    <p>
                                        Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz.
                                        Tüm veriler şifrelenir ve güvenli sunucularda saklanır.
                                    </p>
                                </div>
                            </FooterDialog>

                            <FooterDialog
                                title="Kullanım Koşulları"
                                triggerText="Kullanım Koşulları"
                            >
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Hizmet Kullanımı</h3>
                                    <p>
                                        Flexlore Inc. hizmetlerini kullanarak, bu koşulları kabul etmiş olursunuz.
                                        Hizmetlerimizi yasal ve etik çerçevede kullanmanız gerekmektedir.
                                    </p>
                                    <h3 className="font-semibold">Fikri Mülkiyet</h3>
                                    <p>
                                        Tüm içerik ve materyaller Flexlore Inc.&apos;e aittir.
                                        İzinsiz kullanım ve kopyalama yasaktır.
                                    </p>
                                    <h3 className="font-semibold">Sorumluluk Reddi</h3>
                                    <p>
                                        Hizmetlerimizi &quot;olduğu gibi&quot; sunuyoruz.
                                        Kesintisiz veya hatasız hizmet garantisi vermiyoruz.
                                    </p>
                                </div>
                            </FooterDialog>

                            <FooterDialog
                                title="Çerez Ayarları"
                                triggerText="Çerez Ayarları"
                            >
                                <div className="space-y-4">
                                    <h3 className="font-semibold">Zorunlu Çerezler</h3>
                                    <p>
                                        Sitenin temel işlevleri için gerekli olan çerezlerdir.
                                        Bu çerezler olmadan site düzgün çalışmaz.
                                    </p>
                                    <h3 className="font-semibold">Analitik Çerezler</h3>
                                    <p>
                                        Site kullanımını analiz etmek ve performansı ölçmek için kullanılan çerezlerdir.
                                        Bu çerezleri devre dışı bırakabilirsiniz.
                                    </p>
                                    <h3 className="font-semibold">Pazarlama Çerezleri</h3>
                                    <p>
                                        Kişiselleştirilmiş reklamlar sunmak için kullanılan çerezlerdir.
                                        Bu çerezleri tercihlerinize göre yönetebilirsiniz.
                                    </p>
                                </div>
                            </FooterDialog>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
} 
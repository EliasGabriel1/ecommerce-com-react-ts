import React from "react";

export function Links() {
    return (
        <div className="content__links">
            <ul className="links__items">
                <p className="links__title">Institucional</p>
                <div className="dropdown__content">
                    <li><a href="/marca">a marca</a></li>
                    <li><a href="https://materiais.franquiachillibeans.com.br/modelos-de-negocio/" rel="nofollow">seja um franqueado</a></li>
                    <li><a href="https://www.mundochillibeans.com.br/" rel="nofollow">mundo chilli</a></li>
                    <li><a href="/venda-corporativa">venda corporativa</a></li>
                    <li><a href="https://loja.chillibeans.com.br/whatsapp" rel="nofollow">encontre uma loja</a>
                    </li>
                    <li><a href="/trabalhe-conosco">trabalhe conosco</a></li>
                </div>
            </ul>
            <ul className="links__items">
                <p className="links__title" style={{ width: "max-content" }}>Mais Chilli</p>
                <div className="dropdown__content">
                    <li><a href="/account#/orders">meus pedidos</a></li>
                    <li><a href="/central-de-atendimento/perguntas-frequentes">perguntas frequentes</a></li>
                    <li><a href="https://loja.chillibeans.com.br/whatsapp">fale com a loja</a></li>
                    <li><a
                        href="https://orbchillibeans.nccserver.com.br/Orbium/Chillibeans/chISelfAssistancesite/Relation_SelfAssistance_Edit.aspx">fale
                        conosco</a></li>
                    <li><a href="/institucional/politicaprivacidade">política de privacidade</a></li>
                    <li><a href="/central-de-atendimento/devolucoes">devoluções</a></li>
                    <li><a href="/chilli-vision">chilli vision</a></li>
                    <li><a href="/arquivos/regulamento_natal.pdf?v=637423409086970000">regulamento comprou ganhou - natal</a></li>
                    <li><a href="/arquivos/REGULAMENTO_CampanhaComprouZEISS_GanhouVROne_ÓticaChilliBeans_Abr21_final.pdf?v=637539389031300000">regulamento Comprou ZEISS, Ganhou VR one</a></li>
                    <li><a href="/central-de-atendimento/regulamentos" rel="nofollow">regulamentos</a></li>
                    <li><a href="/arquivos/regulamento-live-commerce.pdf?v=637387322527530000" target="_blank">regulamento live commerce</a></li>
                    <li><a href="/campanhagrau">regulamento promoção lentes de grau</a></li>
                </div>
            </ul>
            <ul className="links__items">
                <p className="links__title">Links úteis</p>
                <div className="dropdown__content">
                    <li><a href="/oculos-de-sol?O=OrderByReleaseDateDESC">óculos de sol</a></li>
                    <li><a href="/acessorios?PS=48&amp;O=OrderByReleaseDateDESC">acessórios</a></li>
                    <li><a href="/armacoes-para-oculos-de-grau?PS=48&amp;O=OrderByReleaseDateDESC">armações de grau</a></li>
                    <li><a href="/busca/?fq=0&amp;O=OrderByReleaseDateDESC">lançamentos</a></li>
                    <li><a href="/relogios?PS=48&amp;O=OrderByReleaseDateDESC">relógios</a></li>
                    <li><a href="/outlet">outlet</a></li>
                    <li><a href="/eventos">eventos</a></li>
                    <li><a href="/catalogo">catálogo de produtos</a></li>
                </div>
            </ul>
        </div>
    );
}